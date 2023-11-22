import { Fragment } from 'react';
import JobsContainer from '@/app/_components/Jobs/container'
import { AppProvider } from "@/app/_providers/AppContext";

export default async function Jobs() {
  return (
    <Fragment>
      <AppProvider>
        <JobsContainer />
      </AppProvider>
    </Fragment>
  )
}