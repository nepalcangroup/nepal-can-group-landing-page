import React from "react";
import { Layout } from "@/components/Layout";
import { NarrowLayout } from "@/components/NarrowLayout";
import Link from "next/link";

const PageNotFoundScreen = () => {
  return (
    <Layout>
      <NarrowLayout>
        <div className="h-[80vh] flex flex-col items-center justify-center">
          {/* Simple SVG/Text replacement for Lottie animation */}
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
            <div className="text-2xl text-gray-600 mb-4">Page Not Found</div>
            <div className="text-lg text-gray-500 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist or has been moved.
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/" 
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Go Home
            </Link>
          </div>
        </div>
      </NarrowLayout>
    </Layout>
  );
};

export default PageNotFoundScreen;
