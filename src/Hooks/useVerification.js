import { useEffect, useState } from "react";

const useVerification = (email) => {
  const [isVerification, setIsVerification] = useState(false);
  const [isVerificationLoading, setIsVerificationLoading] = useState(true);
  useEffect(() => {
    if (email) {
      // console.log(email)
      fetch(
        `https://resale-server-ten.vercel.app/users/checkVerification/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setIsVerification(data.isVerification);
          setIsVerificationLoading(false);
        });
    }
  }, [email]);
  return [isVerification, isVerificationLoading];
};

export default useVerification;
