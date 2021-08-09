import { Box, Image, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import folderIcon from "../../images/icons8-folder-512.png";
import { BsFillTrashFill } from "react-icons/bs";
import styled from 'styled-components'
import { database, storage } from "../../../Signin/firebase"
import db from "../../../Signin/firebase";
import { useAuth } from "../../../Signin/context/AuthContext";


const IconWrapper = styled.div`
position: absolute;
top: 150px;
left: 40px;
cursor: pointer;

&:hover{
  color: #FF7C5D;
}
`

function Folder({ folder }) {
  const toast = useToast();
  const {currentUser} = useAuth;

  const deleteFolder = async () => {
    try {
      // const folderRef = await storage.ref().child(folder.folderPath);
      // await folderRef.delete(); 


      // await database.folders.doc(folder.id).child(folder.path).delete();
      // toast({
      //   title: "Deleted",
      //   description: "folder deleted successfully!",
      //   status: "info",
      //   duration: 1000,
      //   isClosable: true,
      // }

      // if (database.folders.doc(folder.id) === database.folders.doc(folder.folderId).child(folder.path.parentId));
      //   console.log(database.folders.doc(folder.folderId).child(folder.path.name))
      // await database.folders.doc(folder.id).delete();
      // toast({
      //   title: "Deleted",
      //   description: "folder deleted successfully!",
      //   status: "info",
      //   duration: 1000,
      //   isClosable: true,
      // }
      
      await database.folders.doc(folder.id).delete();
      toast({
        title: "Deleted",
        description: "folder deleted successfully!",
        status: "info",
        duration: 1000,
        isClosable: true,
      }
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
      <Box
        display="block"
        borderRadius="md"
        borderWidth="2px"
        className="hoverAnim"
        transition="ease-in-out 0.1s"
      >
        <Link to={{ pathname: `/folder/${folder.id}`, state: { folder } }}>
        <Image
          width="70px"
          fallbackSrc={folderIcon}
          margin="0 auto"
          src={folderIcon}
          alt={folder.name}
        />
        <Text isTruncated={true} as="h2" fontSize="xl" align="center" px="2">
          {folder.name} 
        </Text>
        </Link>
        <IconWrapper onClick={deleteFolder}>
        <BsFillTrashFill/>
        </IconWrapper>
      </Box>
    
  );
}

export default Folder;