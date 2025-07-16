import type { z, infer as zodInfer } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button";
import { SignupValidation } from "../../lib/Validation/index";
import Loader from "../../components/shared/Loader";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const isLoading =false; 
  const form = useForm<z.Infer<typeof SignupValidation>>({
    
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: zodInfer<typeof SignupValidation>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col mr-[-2rem]">
      <img className="justify-center items-center" src="/images/Logo.svg" alt="logo" />
      <h2 className="h3-bold md:h6-bold sm:pt-2 ">Create a new account</h2>
      <p className="text-light-3 small-medium md:base-regular mt-2 mb-2">To use Snapgram enter your details</p>
    
      <form  onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" className= "bg-dark-4 rounded-[0.5rem] border-violet-500" placeholder="" {...field} />
              </FormControl>              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" className= " bg-dark-4 rounded-[0.5rem] border-violet-500" placeholder="" {...field} />
              </FormControl>    
               <FormMessage />
            </FormItem>
          )}
        />
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
            {isLoading ?(
              <div className="flex-center gap-2">
                <Loader/>
              </div>
            ):"Sign Up"}
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">Already have an account? 
          <Link to="/sign-in" className="text-small-semibold text-primary-500 ml-1">Log in 
          </Link>
          </p>
      </form>
        </div>
    </Form>
  );
}



export default SignupForm;