"use client";

import styles from "@/styles/css/page.module.css";
import { FormEvent, useEffect, useState } from "react";
import { Button, InputField } from "../form";
import { TFormData, TLoginValidation } from "@/types/form";
import Link from "next/link";
import { emailRegExp, passwordRegExp } from "@/utils/validate.form";
import { redirect, useRouter } from "next/navigation";

export default function LoginForm() {
  const [formData, setFormData] = useState<TFormData>({});
  const [validation, setValidation] = useState<TLoginValidation>({});
  const [validated, setValidatedData] = useState<TLoginValidation>({});
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard");
    // setValidatedData(validation);
    // const status = Object.values(validated).every((el) => {
    //   el === true;
    // });
    // if (status) {
    // }
  };

  useEffect(() => {
    console.log(validated);
  }, [validated]);

  return (
    <form onSubmit={handleSubmit} className={styles.login_form_body}>
      <InputField
        name="email"
        type="email"
        getData={setFormData}
        placeholder="Email"
        required
        pattern={emailRegExp}
        checkValidation={setValidation}
        isValid={validated["email"]}
      />
      <InputField
        name="password"
        type="password"
        getData={setFormData}
        placeholder="Password"
        required
        pattern={passwordRegExp}
        checkValidation={setValidation}
        isValid={validated["password"]}
      />
      <Link href="#" className="forgot-password" type="submit">
        Forgot Password?
      </Link>
      <Button type={"submit"} className="login-button">
        Log In
      </Button>
    </form>
  );
}
