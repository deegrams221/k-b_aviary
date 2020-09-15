import { Button, FormControl, FormGroup, FormHelperText, Icon, Input, InputLabel } from '@material-ui/core';
import react from React;


export default function ContactForm() {

  return(
    <FormGroup>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Please enter your name.</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone Number</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your phone number.</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
        type="submit" value="Send Message"
      >
        Send
      </Button>
    </FormGroup>
  );
}