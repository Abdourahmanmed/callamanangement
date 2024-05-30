import BoxInfo from "@/components/BoxInfo"

const Admin = () => {

    return (
        <div className="px-8 py-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <BoxInfo text="Agents connects" nombre="6"/>
                <BoxInfo text="Nombre d'appelle reçu" nombre="106" />
                <BoxInfo text="Nombre de plainte total" nombre="50" />
                <BoxInfo text="Nombre de rendez-vous total" nombre="27" />
                <BoxInfo text="Nombre d'information reçu" nombre="29" />
                <BoxInfo text="les appelles recouvrements" nombre="60" />
                <BoxInfo text="les appelles prospections" nombre="46" />
            </div>

        </div>
    )
}

export default Admin