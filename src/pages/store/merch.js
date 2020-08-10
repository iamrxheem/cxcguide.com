import React from "react";
import SEO from "../../components/seo";
import StoreLayout from "../../layouts/storeLayout";
import StoreItem from "../../common/storeItem";
// import {MobileView, BrowserView} from "react-device-detect";

// Common
import Breadcrumb from "../../common/breadcrumb";
import BreadcrumbItem from "../../common/breadcrumbItem";

function Page() {
  return (
    <StoreLayout>
      <SEO
        keywords={[
          `store`,
          `buy`,
          `buy cxc past papers`,
          `csec`,
          `cape`,
          `purchase`,
          `purchase past papers`,
          `tshirts`,
          `tspring`,
          `merch`,
          `csec`,
          `pob`,
          `Principles of Business`,
          `mc`,
          `mcq`,
          `cxc july exams`,
          `Raheem McDonald`,
          `paperbin`,
          `past paperbin`,
          `pastpaperbin.com`,
          `paperbin.xyz`
        ]}
        title="Store"
        description="Support us, and support your local authors. Buy our merchandise, premium guides to help us bring more lessons to you and other students."
      />

      <section className="flex-1 full max-w-4xl px-4 mx-auto md:pt-5">
        <Breadcrumb>
          <BreadcrumbItem title="Merch" />
        </Breadcrumb>
      </section>

      <section className="flex-1 full max-w-1xl px-4 mx-auto">
        <div>
          <h1 className="text-xl text-blue-700 font-bold">Hoodies</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            <div>
              <StoreItem
                imgSrc="https://vangogh.teespring.com/v3/image/bZi99P907UQLws8KX8FsOt_6zLk/480/560.jpg"
                title=""
                description=""
                href=""
                price=""
              />
            </div>
            <div>
              <StoreItem
                imgSrc="https://vangogh.teespring.com/v3/image/8pGh3WcowKYpRWO9dikWq9fuPOE/480/560.jpg"
                title=""
                description=""
                href=""
                price=""
              />
            </div>
            <div>
              <StoreItem
                imgSrc="https://vangogh.teespring.com/v3/image/qGgeUWeACSi8-rxSY3U8I0UvUEE/480/560.jpg"
                title=""
                description=""
                href=""
                price=""
              />
            </div>
          </div>
        </div>

        <div>
          <br />
          <br />
          <h1 className="text-xl text-blue-700 font-bold">Category</h1>
          <br />
          <br />

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            <div>
              <StoreItem imgSrc="" title="" description="" href="" price="" />
            </div>
            <div>
              <StoreItem imgSrc="" title="" description="" href="" price="" />
            </div>
            <div>
              <StoreItem imgSrc="" title="" description="" href="" price="" />
            </div>
            <div>
              <StoreItem imgSrc="" title="" description="" href="" price="" />
            </div>
            <div>
              <StoreItem imgSrc="" title="" description="" href="" price="" />
            </div>
            <div>
              <StoreItem imgSrc="" title="" description="" href="" price="" />
            </div>
          </div>
        </div>

        <div>
          <br />
          <br />
          <h1 className="text-xl text-blue-700 font-bold">Category</h1>
          <br />
          <br />

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            <div>
              <StoreItem imgSrc="" title="" description="" href="" price="" />
            </div>
            <div>
              <StoreItem imgSrc="" title="" description="" href="" price="" />
            </div>
            <div>
              <StoreItem imgSrc="" title="" description="" href="" price="" />
            </div>
            <div>
              <StoreItem imgSrc="" title="" description="" href="" price="" />
            </div>
            <div>
              <StoreItem imgSrc="" title="" description="" href="" price="" />
            </div>
            <div>
              <StoreItem imgSrc="" title="" description="" href="" price="" />
            </div>
          </div>
        </div>
      </section>
    </StoreLayout>
  );
}

export default Page;
