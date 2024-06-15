"use client";

import styles from "@/styles/css/page.module.css";
import { FormEvent, useEffect, useState } from "react";
import { Button, InputField } from "../form";
import { TLoginData } from "@/types/form";
import Link from "next/link";
import { emailRegExp, passwordRegExp } from "@/utils/validate.form";

export default function LoginForm() {
  const [formData, setFormData] = useState<TLoginData>({});
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.login_form_body}>
      <InputField
        name="email"
        type="email"
        getData={setFormData}
        placeholder="Email"
        required
        pattern={emailRegExp}
      />
      <InputField
        name="password"
        type="password"
        getData={setFormData}
        placeholder="Password"
        required
        pattern={passwordRegExp}
      />
      <Link href="#" className="forgot-password" type="submit">
        Forgot Password?
      </Link>
      <Button>Log In</Button>
    </form>
  );
}
