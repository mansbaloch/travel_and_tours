import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
        image={Trip1}
        heading="Trip in Indonesia"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nulla, inventore ducimus nihil perferendis distinctio ipsum, eaque porro in nisi accusamus illo, quae sint rem minima incidunt doloremque suscipit similique!"
        />
        <TripData
        image={Trip2}
        heading="Trip in Malaysia"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nulla, inventore ducimus nihil perferendis distinctio ipsum, eaque porro in nisi accusamus illo, quae sint rem minima incidunt doloremque suscipit similique!"
        />
        <TripData
        image={Trip3}
        heading="Trip in France"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nulla, inventore ducimus nihil perferendis distinctio ipsum, eaque porro in nisi accusamus illo, quae sint rem minima incidunt doloremque suscipit similique!"
        />
        
      </div>
    </div>
  );
}

export default Trip;
