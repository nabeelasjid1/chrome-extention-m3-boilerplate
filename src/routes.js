import messagePassing from "./services/messagePassing";
/**
 *
 * messagePassing object is the Messaging Passing Class Object
 * which contains methods suitable for message passing apis.
 *
 * */
export default () => {
  messagePassing.on("/echo", async (req, res, actions) => {
    console.log("message logged");
    res({ response: "hello world" });
  });
};
