import React from 'react';
import SingleService from './SingleService';

const HomeServices = () => {
  return (
    <section className='w-full px-5 py-20 md:px-10 bg-neutral-100'>
        <h2 className="text-2xl font-bold text-black text-center">OUR SERVICES</h2>
        <h1 className='text-3xl md:text-5xl font-bold text-sky-900 mt-5 text-center'>
          High Impact Services For Your Business
        </h1>
        <div className='flex items-center justify-center flex-wrap gap-10 mt-14'>
            <SingleService 
              icon='/assets/software-service.svg' 
              name='Custom Software Development' 
              description='Tailored software solutions designed to meet specific business requirements.'
            />
            <SingleService 
              icon='/assets/website-service.svg'
              name='Web Development' 
              description='Creating responsive, user-friendly websites that are custom-built to fit your business goals. We ensure seamless experiences that enhance engagement and drive success.'
            />
            <SingleService 
              icon='/assets/app-service.svg' 
              name='App Development' 
              description='Designing intuitive, high-performance mobile apps customized to meet your specific needs. We focus on delivering seamless, user-centric solutions for iOS and Android.'
            />
            <SingleService 
              icon='/assets/ai-service.svg' 
              name='AI & Machine Learning' 
              description='Leveraging AI and machine learning to optimize and transform your business operations. We deliver intelligent solutions that enhance decision-making and drive innovation.'
            />
            <SingleService 
              icon='/assets/ui-service.svg' 
              name='UI/UX Design' 
              description='Creating visually appealing user interfaces designed to provide seamless and engaging user experiences. We focus on delivering intuitive designs that drive interaction and satisfaction.'
            />
            <SingleService 
              icon='/assets/api-service.svg' 
              name='API Development'
              description='Facilitating seamless data exchange through expertly integrated API development. We build robust, scalable APIs to ensure smooth connectivity and enhance platform performance.'
            />
        </div>
    </section>
  );
}

export default HomeServices;
