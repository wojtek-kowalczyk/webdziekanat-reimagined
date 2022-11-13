import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { autocompleteClasses, Button, IconButton } from "@mui/material";
import SignIn from "./signin";
import CloseIcon from "@mui/icons-material/Close";

export interface SignInDialogProps {
  open: boolean;
  onClose: (accepted: boolean) => void;
  submitForm: (
    accepted: boolean,
    username: string | undefined,
    password: string | undefined
  ) => void;
}

export default function SimpleDialog(props: SignInDialogProps) {
  const { onClose, open, submitForm } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "auto" }}></div>
        <IconButton onClick={() => onClose(false)}>
          <CloseIcon />
        </IconButton>
      </div>
      <SignIn
        submitForm={submitForm}
      ></SignIn>
    </Dialog>
  );
}
