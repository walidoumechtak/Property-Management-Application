import MainLayout from "../layouts/MainLayout";
import propertyImage from "../assets/images/Property.jpg";
import { useQuery } from "@apollo/client";
import { GetPropertieQuery, GetPropertieQueryVariables } from "../gql/graphql";
import { GET_PROPERTIE } from "../graphql/queries/getPropertie";

function SinglePropertie() {
    const id = window.location.pathname.split("/").pop();
    const {data, error, loading} = useQuery<GetPropertieQuery, GetPropertieQueryVariables>(GET_PROPERTIE, {
        variables: {
            id: Number(id),
        }
    });

    return (
        <MainLayout>
          <div className="bg-gray-50 h-[100vh] w-full pt-[80px] ">
              <div className="flex mx-auto container bg-white max-w-[1200px] shadow-custom">
                  <div className="w-1/2 mr-2">
                    <img src={propertyImage} alt="" />
                  </div>
              <div className="w-1/2 flex text-center p-4 flex-col">
                  <div>
                    <h2 className="font-bold text-[24px]">{data?.getPropertie.name}</h2>
                  </div>
              </div>
              </div>
          </div>
        </MainLayout>
  );
}
export default SinglePropertie;