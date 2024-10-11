import { useEffect, useState } from 'react';
import axios from 'axios';

const CovidTable = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://disease.sh/v3/covid-19/countries');
        setData(response.data); 
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        setError("Erreur lors de la récupération des données");
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []); 

  if (loading) return <div>Chargement des données...</div>;
  if (error) return <div>{error}</div>;

  return (
    <table className="table table-striped table-hover">
      <thead className='text-center'>
        <tr>
          <th>Pays</th>
          <th>Updated</th>
          <th>Flags</th>
          <th>Cases</th>
          <th>Deaths</th>
          <th>Recovered</th>
          <th>Tests</th>
        </tr>
      </thead>
      <tbody>
        {data.map((country) => (
          <tr key={country.country}>
            <td>{country.country}</td>
            <td>{country.updated}</td>
            <td><img src={country.flag} width={70} height={50}/></td>
            <td>{country.cases}</td>
            <td>{country.deaths}</td>
            <td>{country.recovered}</td>
            <td>{country.tests}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CovidTable;
