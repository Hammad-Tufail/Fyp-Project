import React from 'react';

const clinics = [
  {
    image: '',
    name: 'Paws N Claws Pets Clinic',
    location: 'Paakeeza Market Street I-8/4, Islamabad',
    description: 'Providing quality care for your furry friends.',
    contactNumber:'03328888788',
     
  },
  {
    image: '',
    name: 'Hope Pets Clinic Islamabad',
    location: 'Islamabad diagnostic basement, Lehtrar road, Taramri, Islamabad ',
    description: 'Compassionate care for pets of all shapes and sizes.',
    contactNumber:'0300155589',
     

  },
  {
    image: '', 
    name: 'Heal Animal Health Services',
    location: 'Alipur, Lehtrar road, Islamabad',
    description: 'Caring for your pets as if they were our own.',
    contactNumber: '03343402578',
    
  },
  {
    image: '', 
    name: 'JunniVet Animal Hospital',
    location: 'Karal chowk, Maskeen Plaza, New Gulzar-e-Quaid, Rawalpindi',
    description: 'Caring for your pets as if they were our own.',
    contactNumber: '03323950039',
    
  },
  {
    image: '', 
    name: 'Heal Animal Health Services',
    location: 'Alipur, Lehtrar road, Islamabad',
    description: 'Caring for your pets as if they were our own.',
    contactNumber: '03343402578',
    
  },
  {
    image: '', 
    name: 'Pets and Avian Health Clinic',
    location: 'Street 10-D, Ghauri Town Phase 5-B, Islamabad',
    description: 'Caring for your pets as if they were our own.',
    contactNumber: '03415160985',
    
  },
];

function ClinicsPage() {
  return (
    <>

      <section className='bg-[#fff9ea]'>
        <div className="container justify-center">
          <h2 className='heading'>Clinics</h2>

        </div>
      </section>




      <section>
        <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {clinics.map((clinic, index) => (
            <div key={index} className="bg-white shadow-md rounded-md p-4">
              {/* <img src={clinic.image} alt={`Image for ${clinic.name}`} className="w-full h-auto" /> */}
              <h2 className="text-[20px] font-semibold mb-2">{clinic.name}</h2>
              <p className="text-textColor text-[16px] mb-2"><span className="text-black font-semibold text-[16px]">Address:</span> {clinic.location}</p>
              {/* <p className="text-textColor text-[16px] mb-2">{clinic.description}</p> */}
              <p className="text-textColor text-[16px] mb-2"><span className="text-black font-semibold text-[16px]">Contact number:</span>{clinic.contactNumber}</p>
              
            </div>
          ))}
        </div>
        </div>

      </section>
    </>

  );
}

export default ClinicsPage;
