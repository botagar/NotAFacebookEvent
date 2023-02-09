import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { queryClient } from "@/lib/react-query";
import { NormaliseStyles } from "@/utils/normaliseStyles";

const ErrorFallback = () => {
    return (
      <div>
        <h2>Ooops, something went wrong :( </h2>
      </div>
    );
  };

export const App = () => (
    <React.Suspense fallback={<h1>Loading...</h1>}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <QueryClientProvider client={queryClient}>
            {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>}
                <NormaliseStyles>
                    <p>Hello Worlds</p>
                </NormaliseStyles>
            </QueryClientProvider>
        </ErrorBoundary>
    </React.Suspense>
);
