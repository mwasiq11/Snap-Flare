import { Outlet, Navigate } from 'react-router-dom'
const AuthLayout = () => {
    const isAuthenticated = false;
    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
            ) :
                <section className="flex items-center justify-center w-1/2 h-screen">
                    <Outlet />
                </section >}
            <img src="/images/side-img.svg" alt="sideImg"
                className='hidden xl:flex items-center justify-center mx-[42rem] -mt-[48.41rem]' />
        </>
    )
}
export default AuthLayout
