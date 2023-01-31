import axios from 'axios';

const finalData = (props) => {
  const { Data } = props;

  return Data.map((Elements) => {
    return (
      <div key={Elements.id}>
        
        <div>{Elements.designation}</div>
        <img src={Elements.profile_image} alt='' />
        <div>{Elements.team_mail}</div>
        <div>{Elements.team_phone}</div>
        <div>{Elements.team_twitter}</div>
        <div>{Elements.team_linkedin}</div>
      </div>
    );
  });
};

export async function getStaticProps() {
  const res = await axios.get('http://127.0.0.1:8000/public/team');
  const Data = res.data;
  return {
    props: { Data },
  };
}
export default finalData;
