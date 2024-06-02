import BoxInfo from "@/components/BoxInfo";
import MyChart from "@/components/MyChart";

const Admin = () => {
    
      const sampleData  = {
        labels: ["janvier", "fevrier", "mars", "avril", "mai","jun","juillet","aout","sept","oct","nov","dec"],
        datasets: [
          {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55, 40,20,14,80,90,50],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'Dataset 2',
            data: [0, 48, 40, 19, 86, 27, 90,20,15,35,37,30],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Dataset 3',
            data: [18, 48, 77, 9, 100, 27, 40,80,90,19, 86, 27,],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      };

    return (
        <div className="px-8 py-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <BoxInfo text="Agents connects" nombre="6"/>
                <BoxInfo text="Nombre d'appelle du poste" nombre="106" />
                <BoxInfo text="Nombre d'applle de l'ADR" nombre="50" />
                <BoxInfo text="Nombre d'applle de l'Arulos" nombre="27" />
            </div>
            <div className="h-[600px] w-full p-4 ">
                <MyChart data={sampleData} typeofchart={"line"} />
            </div>

        </div>
    )
}

export default Admin