import React from 'react'

interface  LayoutProps  {
  children: React.ReactNode;
  className:string;
  keyType:String;
  pageNumber?:number;
}

const PageLayout = ({children,className,keyType,pageNumber}:LayoutProps) => {
    console.log('page re-rendered')
  return (
    <>
<main  className={className}>
{children}
{pageNumber}
</main>
    </>
  )
}

export default PageLayout