import styles from "./SignIn.module.scss";

function SignIn() {
    return (
        <>
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

                <button type="submit">Sign In</button>
            </form>
        </>
    );
}

export default SignIn;
