import styles from "./SignIn.module.scss"

function SignIn() {
    return (
        <main>
            <section id="sign-in">
                <div>
                    <h1 className={styles.title}>Food Stack</h1>

                    <form className={styles.form}>
                        <div className={styles.row}>
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className={styles.row}>
                            <input type="text" placeholder="Nickname" />
                        </div>
                        <div className={styles.row}>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className={styles.row}>
                            <input type="text" placeholder="Telephone" />
                        </div>
                        <div className={styles.row}>
                            <input type="text" placeholder="CEP" />
                        </div>

                        <button type="submit">Sign In</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default SignIn
