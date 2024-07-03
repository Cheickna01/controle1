import { Form, FormGroup, Input, Label, Button } from "reactstrap";

export default function Modal({setCloseModal,closeModal}) {
  return (
    <div className={`modale ${setCloseModal && "opened"}`}>
      <div className="modale-content py-10 px-20 rounded relative mb-[10vh]">
        <Form>
          {/*on use innerRef au lieu de Ref car reacstrap utilise deja ref */}
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="remember"
              />
              Remember me
            </Label>
          </FormGroup>
          <Button outline type="submit" value="submit" className="btn-perso1">
            Login
          </Button>
        </Form>

        <button className="bg-red-600 text-slate-100 rounded w-7 h-7 absolute top-1 right-1" onClick={()=>setCloseModal(!closeModal)}>
          x
        </button>
      </div>
    </div>
  );
}
