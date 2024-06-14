import Image from "next/image";
import styles from "@/styles/css/page.module.css";
import appdata from "@/utils/metadata";
import { LoginForm } from "@/components/ui";

export default function Home() {
  return (
    <main className={styles.login_main}>
      <div className={styles.login_content}>
        <div className={styles.login_welcome}>
          <div className={styles.login_brand}>
            <Image
              priority
              src="/brand.svg"
              alt={appdata.title}
              title={appdata.title}
              width={140}
              height={36}
            />
          </div>
          <Image
            priority
            className={styles.login_welcome_img}
            src="/signinimg.png"
            alt="alt"
            width={600}
            height={338}
          />
        </div>
        <div className={styles.login_form}>
          <div className={styles.login_form_content}>
            <div className={styles.login_form_heading}>
              <h1 className={styles.login_form_header}>Welcome!</h1>
              <p className={styles.login_form_info}>Enter details to login.</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
