import Button from "components/ui/Button";

interface Props {

}

const Components = (props: Props) => {
  return (
    <div>
      <h1>A list of components!</h1>
      <section>
        <h2>
          Buttons
        </h2>
        <div className="u-flex u-flex--column u-flex--align-start">
          <Button onClick={() => {}} className="u-margin-bottom-small">Normal Button</Button>
          <Button variant="primary" className="u-margin-bottom-small">Primary Button</Button>
          <Button variant="warning">Warning Button</Button>
        </div>
      </section>
    </div>
  )
}

export default Components;