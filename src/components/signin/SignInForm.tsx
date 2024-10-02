import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const signInSchema = z.object({
    fullName: z.string().min(2, "Full Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    phone: z.string().regex(/^\d+$/, "Phone number should contain only numbers").optional(),
    agreeToPolicy: z.boolean().refine(val => val === true, "You must agree to the Privacy Policy")
});

interface SignInFormProps {
    onSuccessfulSignIn: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSuccessfulSignIn }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signInSchema),
    });

    const onSubmit = (data: any) => {
        console.log("Sign In Data: ", data);
        onSuccessfulSignIn();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-[40px]">
            <div>
                <label className="block text-[14px] text-[#1D1D1D] font-poppins font-regular">Full Name</label>
                <input
                    {...register("fullName")}
                    className={`mt-1 block w-full border-b-2 focus:outline-none focus:border-purple-600 ${errors.fullName ? 'border-red-500' : 'border-[#1D1D1D]'}`}
                    placeholder="Name Surname"
                    style={{ borderRadius: '0px' }} />
                {errors.fullName && typeof errors.fullName.message === 'string' && (
                    <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                )}
            </div>

            <div>
                <label className="block text-[14px] text-[#1D1D1D] font-poppins font-regular">Your Email</label>
                <input
                    {...register("email")}
                    className={`mt-1 block w-full border-b-2 focus:outline-none focus:border-purple-600 ${errors.email ? 'border-red-500' : 'border-[#1D1D1D]'}`}
                    placeholder="Mail"
                    style={{ borderRadius: '0px' }} />
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

            <div>
                <label className="block text-[14px] text-[#1D1D1D] font-poppins font-regular">Your Phone</label>
                <input
                    {...register("phone")}
                    placeholder="Phone"
                    className={`mt-1 block w-full border-b-2 focus:outline-none focus:border-purple-600 ${errors.phone ? 'border-red-500' : 'border-[#1D1D1D]'}`}
                    style={{ borderRadius: '0px' }}
                />
                {errors.phone && typeof errors.phone.message === 'string' && (
                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
            </div>

            <div>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        {...register("agreeToPolicy")}
                        className="mr-2 size-4"
                    />
                    <span className="block text-[14px] text-black font-poppins font-regular">Yes, I have read and agree to the Privacy Policy</span>
                </label>
                {errors.agreeToPolicy && typeof errors.agreeToPolicy.message === 'string' && (
                    <p className="text-red-500 text-sm">{errors.agreeToPolicy.message}</p>
                )}
            </div>

            <button
                type="submit"
                className="bg-black rounded-[24px] w-[120px] text-white px-2 py-3"
            >
                Sign In
            </button>

            <p className='text-center text-[14px] font-poppins font-regular'>Already have an account?<span className='text-[#008FE0] ml-[24px]'>Log in</span></p>
        </form>
    );
};

export default SignInForm;
