import { ClimbingGym } from "@/app/dataModel";

interface ClimbingGymProps {
  data: ClimbingGym;
}
const ClimbGym: React.FC<ClimbingGymProps> = ({ data: gym }) => {
  return (
    <article key={gym.name}>
      <h3>{gym.name}</h3>
      <p>{gym.description}</p>
      <table>
        {Object.keys(gym).map((propName) => (
          <tr key={propName}>
            <td>{propName}</td>
            <td>{JSON.stringify(gym[propName as keyof ClimbingGym])}</td>
          </tr>
        ))}
      </table>
    </article>
  );
};

export default ClimbGym;
