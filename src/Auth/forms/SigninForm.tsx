import { type z, type infer as zodInfer } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "../../components/ui/form";
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button";
import { SigninValidation } from "../../lib/Validation/index";
import Loader from "../../components/shared/Loader";
import { Link,useNavigate} from "react-router-dom";
import  {useToast} from "../../hooks/use-toast";
import { useCreateSignInAccount,} from "../../lib/react-query/queriesAndmutations";
import { useUserContext } from "../../Context/AuthContext";

const SigninForm = () => {
  const { toast } = useToast()
  const{checkAuthUser,isLoading:isUserLoading}=useUserContext()
  const navigate = useNavigate();

  const {mutateAsync:signInAccount}=useCreateSignInAccount()
  const form = useForm<z.Infer<typeof SigninValidation>>({
    
    resolver: zodResolver(SigninValidation),
    defaultValues: {
     
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: zodInfer<typeof SigninValidation>) {
   
      const session= await signInAccount({
        email:values.email,
        password:values.password
      })
      if (!session) {
        return toast({title:"Sign In failed Please try again"})
      }
      const isLoggedIn=await checkAuthUser()
      if(isLoggedIn){
        form.reset();
        navigate("/")
      }
      else{
        return toast({title:"Sign Up failed Please try again"})
      }
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col mr-[-2rem]">
      <img className="justify-center items-center h-[7.5rem] w-auto" src="/images/logoImg.png" alt="logo" />
      <h2 className="h3-bold md:h6-bold sm:pt-2 ">Log in to your account </h2>
      <p className="text-light-3 small-medium md:base-regular mt-2 mb-2">Welcome back! please enter your details</p>
    
      <form  onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full space-y-3">
     
    
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text" className= "bg-dark-4 rounded-[0.5rem] border-violet-500" placeholder="" {...field} />
              </FormControl>    
               <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" className= "bg-dark-4 rounded-[0.5rem] border-violet-500" placeholder="" {...field} />
              </FormControl>    
               <FormMessage />
            </FormItem>
          )}
        /> 
        <Button className="shad-button_primary rounded-[0.5rem]" type="submit">         
            {isUserLoading ?(
              <div className="flex-center gap-2">
                <Loader/>
              </div>
            ):"Log in"}
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">Already have an account? 
          <Link to="/sign-up" className="text-small-semibold text-primary-500 ml-1">Log in 
          </Link>
          </p>
      </form>
        </div>
    </Form>
  );
}

export default SigninForm;