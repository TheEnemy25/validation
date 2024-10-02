import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const logInSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

interface LogInFormProps {
    onSuccessfulLogIn: () => void;
}

const LogInForm: React.FC<LogInFormProps> = ({ onSuccessfulLogIn }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(logInSchema),
    });

    const onSubmit = (data: any) => {
        console.log("Log In Data: ", data);
        onSuccessfulLogIn();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-[50px]">
            <div>
                <label className="block text-[14px] text-[#1D1D1D] font-poppins font-regular">Your Email</label>
                <input
                    {...register("email")}
                    className={`mt-1 block w-full border-b-2 focus:outline-none focus:border-purple-600 ${errors.email ? 'border-red-500' : 'border-[#1D1D1D]'}`}
                    placeholder="Mail"
                    style={{ borderRadius: '0px' }}
                />
                {errors.email && typeof errors.email.message === 'string' && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
            </div>

            <div>
                <label className="block text-[14px] text-[#1D1D1D] font-poppins font-regular">Password</label>
                <input
                    {...register("password")}
                    type="password"
                    className={`mt-1 block w-full border-b-2 focus:outline-none focus:border-purple-600 ${errors.password ? 'border-red-500' : 'border-[#1D1D1D]'}`}
                    placeholder="Password"
                    style={{ borderRadius: '0px' }}
                />
                {errors.password && typeof errors.password.message === 'string' && (
                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}
            </div>

            <button
                type="submit"
                className="bg-black rounded-[24px] w-[120px] text-white px-2 py-3"
            >
                Log In
            </button>

            <p className='text-center text-[14px] font-poppins font-regular'>Don`t have an account?<span className='text-[#008FE0] ml-[24px]'>Sign Up</span></p>

        </form>
    );
};

export default LogInForm;
