import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

export default function () {
  return (
    <div>
      <Navbar />
      <Section
        divid="sectionDiv1"
        h2id="subtitle1"
        h1id="mainTitle1"
        buttonid="button1"
        subtitle="This is the first subtitle"
        mainTitle="This is the first main title"
        button="FIRST"
        src="https://cdn.rentokil.com/content/global/images/desktop/main_rat-vs-mouse-2.jpg"
        width="200"
        height="200"
      />
      <Section
        divid="sectionDiv2"
        h2id="subtitle2"
        h1id="mainTitle2"
        buttonid="button2"
        subtitle="This is the second subtitle"
        mainTitle="This is the second main title"
        button="SECOND"
        src="https://media.istockphoto.com/id/1420399185/vector/mother-and-baby-mouse-cartoon-on-white-background.jpg?s=612x612&w=0&k=20&c=1BiH5aAqJxQIwrJLXIAIztTMI4TGISH3cWEh_UwHgUc="
        width="300"
        height="300"
      />
      <Section
        divid="sectionDiv3"
        h2id="subtitle3"
        h1id="mainTitle3"
        buttonid="button3"
        subtitle="This is the third subtitle"
        mainTitle="This is the third main title"
        button="THIRD"
        src="https://thumbs.dreamstime.com/b/small-rat-standing-ground-fall-small-rat-standing-ground-fall-318711273.jpg"
        width="100"
        height="100"
      />
    </div>
  );
}
