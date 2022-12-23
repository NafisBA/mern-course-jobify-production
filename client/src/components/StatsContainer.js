import StatItem from "./StatItem";
import Wrapper from "../assets/wrappers/StatsContainer";
import { useAppContext } from "../context/appContext.js";
import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from "react-icons/fa";


const StatsContainer = () => {
  const { stats } = useAppContext();
  const defaultStats = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interviews applications",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "declined applications",
      count: stats.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];
  return (
    <Wrapper>
      {defaultStats.map((item, index) => { 
       return <StatItem key={index} {...item}/>
    } )}
      
    </Wrapper>
  );
};

export default StatsContainer;
