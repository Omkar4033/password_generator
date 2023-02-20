import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useCopyToClipboard } from "usehooks-ts";
const Content = () => {
  const symbol = "!@#$%^&*()_+*/-~`.";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const Lcharacters = "abcdefghijklmnopqrstuvwxyz";
  const Num = "0123456789";

  const [Password, copy] = useCopyToClipboard();
  const [length, SetLength] = useState("");
  const [isnum, setisnum] = useState(false);
  const [issym, setissym] = useState(false);
  const [ischar, setischar] = useState(false);
  const [isschar, setisschar] = useState(false);
  const GenerateNum = () => {
    setisnum(!isnum);
    console.log("Number is selected");
  };
  const GenerateSym = () => {
    setissym(!issym);
    console.log("Symbol is selected");
  };
  const GenerateChar = () => {
    setischar(!ischar);
    console.log("Upper Case character is selected");
  };
  const GeneratesChar = () => {
    setisschar(!isschar);
    console.log(" Lower case character is selected");
  };
  let shuffle = (s) => {
    let str = s.split('')
      .sort(() => 0.5 - Math.random())
      .join('');
    return str;   
  }  
  const Generate = () => {
    if (length !== "") {
      let len = Number(length);
      let result = " ";
      let total=Number(ischar)+Number(isnum)+Number(isschar)+Number(issym);
      len=Math.floor(len/total);
      if (ischar) {
        const charactersLength = characters.length;
        for (let i = 0; i < len; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
      }
      if (isschar) {
        const charactersLength = Lcharacters.length;
        for (let i = 0; i < len; i++) {
          result += Lcharacters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
      }
      shuffle(result);
      if (issym) {
        const charactersLength = symbol.length;
        for (let i = 0; i < len; i++) {
          result += symbol.charAt(Math.floor(Math.random() * charactersLength));
        }
      }
      if (isnum) {
        const charactersLength = Num.length;
        for (let i = 0; i < len; i++) {
          result += Num.charAt(Math.floor(Math.random() * charactersLength));
        }
      }
      let rem=Number(length)-result.length;
      for (let i = 0; i <=rem; i++) {
        result += Lcharacters.charAt(
          Math.floor(Math.random() * Lcharacters.length)
        );
      }
      result=shuffle(result).replace(/\s/g, "");
      copy(result);
    }
  };
  const select = (e) => {
    SetLength(e);
    console.log(e);
  };

  return (
    <div>
      <React.Fragment>
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: "#cfe8fc",
              margin: "3vh",
              padding: "3vh",
              height: "64vh",
            }}
          >
            <Box sx={{ paddding: "5vh", margin: "3vh" }}>
              <h3>Generate the Password</h3>
            </Box>
            <Box>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                <Form.Control
                  value={Password}
                  placeholder="Generate Password"
                  label="Username"
                  aria-describedby="basic-addon1"
                />
                <Button
                  onClick={() => {
                    copy(Password);
                  }}
                  variant="outlined"
                  id="basic-addon1"
                >
                  <ContentCopyIcon />
                </Button>
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  value={length}
                  onChange={(e)=>SetLength(e.target.value)}
                  placeholder="Password length"
                  label="Username"
                  aria-describedby="basic-addon1"
                />
                <DropdownButton
                  variant="outline-secondary"
                  title="size"
                  id="input-group-dropdown-1"
                  onSelect={select}
                >
                  <Dropdown.Item eventKey="5">5</Dropdown.Item>
                  <Dropdown.Item eventKey="8">8</Dropdown.Item>
                  <Dropdown.Item eventKey="10">10</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="12">12</Dropdown.Item>
                </DropdownButton>
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Checkbox
                  onClick={GenerateChar}
                  label="Checkbox for following text input"
                />
                <Form.Control
                  value="Uppercase Letters"
                  label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Checkbox
                  onClick={GeneratesChar}
                  label="Checkbox for following text input"
                />
                <Form.Control
                  value="Lowercase Letters"
                  label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Checkbox onClick={GenerateSym} id="Symbol" />
                <Form.Control
                  value="Symbol"
                  label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Checkbox onClick={GenerateNum} id="Number" />
                <Form.Control
                  value="Number"
                  label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Box>
            <Box>
              <Button onClick={Generate} variant="success">
                Generate
              </Button>
            </Box>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};
export default Content;
