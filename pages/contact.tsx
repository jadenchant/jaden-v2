import { useState } from "react";
import Head from 'next/head'
import Header from "../components/Header";

// ALso add Google Authentication
export default function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const [isError, setIsError] = useState(false);
  const [missingFname, setMissingFname] = useState("");
  const [missingLname, setMissingLname] = useState("");
  const [missingEmail, setMissingEmail] = useState("");
  const [incorrectEmail, setIncorrectEmail] = useState("");

  const handleChange = (event: { target: any }) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === "fname") {
      setFname(value);
    } else if (name === "lname") {
      setLname(value);
    } else {
      setEmail(value);
    }
  };

  function handleSubmit(event): void {
    event.preventDefault();
    const formError = checkValidInputs();

    if (!formError) {
      // navigate("/contact/success/");
    }
  }

  function checkValidInputs(): boolean {
    let missing = false;

    if (fname === "") {
      setMissingFname("Missing First Name");
      missing = true;
    } else {
      setMissingFname("");
    }
    if (lname === "") {
      setMissingLname("Missing Last Name");
      missing = true;
    } else {
      setMissingLname("");
    }
    if (email === "") {
      setMissingEmail("Missing Email Address");
      setIncorrectEmail('Missing "@" and "." in Email Address');
      missing = true;
    } else {
      setMissingEmail("");

      if (email.indexOf("@") === -1 && email.indexOf(".") === -1) {
        setIncorrectEmail('Missing "@" and "." in Email Address');
        missing = true;
      } else if (email.indexOf("@") === -1) {
        setIncorrectEmail('Missing "@" in Email Address');
        missing = true;
      } else if (email.indexOf(".") === -1) {
        setIncorrectEmail('Missing "." in Email Address');
        missing = true;
      }
    }

    setIsError(missing);
    return missing;
  }

  return (
    <main className='font-lora'>
      <Head>
        <title>Contact</title>
        <meta name='description' content='Contact Jaden Chant' />
        <meta name='keywords' content='Jaden Chant Web-Developer Software Development contact' />
        <meta name='author' content='Jaden Chant' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>
      <Header />
      <section className='flex flex-col w-full top-28 relative '>
        <form className='flex flex-col'>
          <label className=''>
            <p className='text-center my-2 text-xl'>
              First Name: <span className='required'>*</span>
            </p>
            <div className='text-center'>
              <input
                name='fname'
                type='text'
                value={fname}
                onChange={handleChange}
                className='w-4/6 md:w-1/3 xl:w-1/5 rounded'
              />
            </div>
          </label>
          <label className=''>
            <p className='text-center my-2 text-xl'>
              Last Name: <span className='required'>*</span>
            </p>
            <div className='text-center'>
              <input
                name='lname'
                type='text'
                value={lname}
                onChange={handleChange}
                className='w-4/6 md:w-1/3 xl:w-1/5 rounded'
              />
            </div>
          </label>
          <label className=''>
            <p className='text-center my-2 text-xl'>
              Email: <span className='required'>*</span>
            </p>
            <div className='text-center'>
              <input
                name='email'
                type='email'
                value={email}
                onChange={handleChange}
                className='w-4/6 md:w-1/3 xl:w-1/5 rounded'
              />
            </div>
          </label>
          <div className='text-center my-4 text-xl'>
            <button
              onClick={handleSubmit}
              className='py-2 px-4 rounded-md bg-blue-700 text-blue-50 select-none'
            >
              Next
            </button>
          </div>
        </form>

        <div className={isError ? "flex justify-center w-full" : ""}>
          <ul
            className={
              isError
                ? "w-80 p-4 bg-red-600 text-white select-none rounded"
                : ""
            }
          >
            <li>{missingFname}</li>
            <li>{missingLname}</li>
            <li>{missingEmail}</li>
            <li>{incorrectEmail}</li>
          </ul>
        </div>

        {/* <Social /> */}
      </section>
    </main>
  );
};
