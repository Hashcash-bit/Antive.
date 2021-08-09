// import React from "react";
// import {LeftFormUP} from './UpdateElemets'
// import "./updateprofile.css";
// import UpdatePf from "./updatePf";
// import updatePFsvg from "./image/updatePF.svg";
// import { Link } from "react-router-dom";

// export default function UpdateProfile() {
//   return (
//     <div className="UpdatePage">
//       <div className="form-containerU">
//           <div className="form-content-leftU">
//             <Link to="/dashboard">
//               <span className="logobtnU">Notify.</span>
//             </Link>
//             <p className="subtextoneU">Online Student Management Tool</p>
//             <img className="form-imgU" src={updatePFsvg} alt="update" />
//           </div>
        
//         <UpdatePf />
//       </div>
//     </div>
//   );
// }


import React, { useRef, useState } from "react";
import { useAuth } from "../Signin/context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
  Heading
} from "@chakra-ui/react";
import CenterContainer from "../Drive/utilities/CenterContainer";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/dashboard");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <CenterContainer>
      <Box w="sm" px="6" pt="8" borderWidth="2px" borderRadius="md">
        <Heading as="h2" fontSize="2xl" align="center" mb="4">
          Update Profile
        </Heading>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        <Box as="form" onSubmit={handleSubmit}>
          <FormControl mb="3" id="email">
          <FormControl mb="3" id="username">
            <FormLabel>Username</FormLabel>
            <Input
              variant="flushed"
              type="test"
              placeholder="Username... || Leave blank to keep the same"
            />
          </FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              variant="flushed"
              type="email"
              ref={emailRef}
              required
              defaultValue={currentUser.email}
            />
          </FormControl>
          <FormControl mb="3" id="password">
            <FormLabel>New Password</FormLabel>
            <Input
              variant="flushed"
              type="password"
              ref={passwordRef}
              placeholder="Leave blank to keep the same"
            />
          </FormControl>
          <FormControl mb="3" id="password-confirm">
            <FormLabel>Confirm New Password</FormLabel>
            <Input
              variant="flushed"
              type="password"
              ref={passwordConfirmRef}
              placeholder="Leave blank to keep the same"
            />
          </FormControl>
          <Center>
            <Button
              isLoading={loading}
              colorScheme="cyan"
              variant="ghost"
              w="100"
              type="submit"
              my="4"
            >
              Update
            </Button>
          </Center>
        </Box>
      </Box>
      <Box as="div" w="100" textAlign="center" mt="2">
        <Link to="/dashboard">
          <Button colorScheme="cyan" variant="ghost">
            Cancel
          </Button>
        </Link>
      </Box>
    </CenterContainer>
  );
}