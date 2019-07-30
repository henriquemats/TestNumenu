import React, { useState, Fragment } from "react";

import { Formik } from "formik";
import * as yup from "yup";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider } from "@material-ui/styles";
import Modal from "@material-ui/core/Modal";

import { useStyles, theme } from "./styles/app";

const initialState = {
  name: "",
  email: "",
  age: "",
  phone: ""
};

const userSchema = yup.object().shape({
  name: yup.string().required("POR FAVOR, INFORME SEU NOME"),
  email: yup
    .string()
    .email()
    .required("POR FAVOR, INFORME SEU E-MAIL"),
  age: yup.string().required("POR FAVOR, INFORME SUA IDADE"),
  phone: yup.string().required("POR FAVOR, INFORME SEU TELEFONE")
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

function App() {
  const classes = useStyles();

  const [user, setUser] = useState(initialState);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState([] | null);

  const handleOpen = props => {
    setOpen(true);
    setError(props);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paperModal}>
          {error.name ? (
            <Fragment>
              <span className={classes.error}>{error.name}</span>
              <br />
            </Fragment>
          ) : (
            ""
          )}
          {error.email ? (
            <Fragment>
              <span className={classes.error}>{error.email}</span>
              <br />
            </Fragment>
          ) : (
            ""
          )}

          {error.age ? (
            <Fragment>
              <span className={classes.error}>{error.age}</span>
              <br />
            </Fragment>
          ) : (
            ""
          )}
          {error.phone ? (
            <Fragment>
              <span className={classes.error}>{error.phone}</span>
              <br />
            </Fragment>
          ) : (
            ""
          )}

          {!!error ? (
            <Fragment>
              <span className={classes.success}>Sucesso</span>
              <br />
            </Fragment>
          ) : (
            ""
          )}
        </div>
      </Modal>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          {/* <span>{JSON.stringify(user, null, 2)}</span> */}
          <Formik
            initialValues={initialState}
            onSubmit={async (values, actions) => {
              actions.setSubmitting(true);
              await setUser(values);
              setTimeout(() => {
                actions.resetForm(initialState);
                actions.setSubmitting(false);
              }, 2000);
            }}
            validationSchema={userSchema}
          >
            {props =>
              !props.isSubmitting ? (
                <Fragment>
                  <form
                    onSubmit={props.handleSubmit}
                    className={classes.container}
                  >
                    <TextField
                      type="text"
                      placeholder="Nome"
                      onChange={props.handleChange}
                      value={props.values.name}
                      name="name"
                      className={classes.textField}
                    />

                    <TextField
                      type="email"
                      placeholder="E-mail"
                      onChange={props.handleChange}
                      value={props.values.email}
                      name="email"
                      className={classes.textField}
                    />

                    <TextField
                      type="text"
                      placeholder="Idade"
                      onChange={props.handleChange}
                      name="age"
                      value={props.values.age}
                      className={classes.textField}
                    />

                    <TextField
                      type="tel"
                      placeholder="Telefone"
                      onChange={props.handleChange}
                      value={props.values.phone}
                      name="phone"
                      className={classes.textField}
                    />

                    <ThemeProvider theme={theme}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        disabled={!props.dirty && !props.isSubmitting}
                      >
                        Enviar
                      </Button>
                    </ThemeProvider>
                    {/* <button
                type="submit"  
              >
                Enviar
              </button> */}
                  </form>
                </Fragment>
              ) : (
                <Fragment>
                  {handleOpen(props.errors)}
                  <span>Loading...</span>
                </Fragment>
              )
            }
          </Formik>
        </Paper>
      </div>
    </Fragment>
  );
}

export default App;
