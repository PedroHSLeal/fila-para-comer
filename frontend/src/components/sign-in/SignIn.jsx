import styles from "./SignIn.module.scss"
import { useForm } from "react-hook-form"

export default function SignIn() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    console.log(watch("name"))

    return (
        <main>
            <section id="sign-in">
                <div>
                    <h1 className={styles.title}>Food Stack</h1>

                    <form
                        className={styles.form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className={styles.row}>
                            <input {...register("name", { required: true })} />
                        </div>
                        <div className={styles.row}>
                            <input {...register("nickname")} />
                        </div>
                        <div className={styles.row}>
                            <input {...register("email")} />
                        </div>
                        <div className={styles.row}>
                            <input {...register("telephone")} />
                        </div>
                        <div className={styles.row}>
                            <input {...register("cep")} />
                        </div>

                        <button type="submit">Sign In</button>
                    </form>
                </div>
            </section>
        </main>
    )
}
