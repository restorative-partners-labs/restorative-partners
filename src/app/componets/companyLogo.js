import React from 'react'
import Image  from 'next/image'

export default function CompanyLogo(){
    return(
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            <div className="mx-auto py-4">
              <Image src="/images/client/amazon.svg" width={72} height={24} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
              <Image src="/images/client/google.svg" width={72} height={24} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
              <Image src="/images/client/lenovo.svg" width={72} height={24} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
              <Image src="/images/client/paypal.svg" width={72} height={24} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
              <Image src="/images/client/spotify.svg" width={72} height={24} className="h-6" alt="" />
            </div>

            <div className="mx-auto py-4">
              <Image src="/images/client/shopify.svg" width={72} height={24} className="h-6" alt="" />
            </div>
        </div>
    )
}