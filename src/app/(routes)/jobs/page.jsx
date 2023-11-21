import { Fragment, useContext } from 'react';
import JobsContainer from '@/app/_components/Jobs/Container'
import { AppProvider, AppContext } from "@/app/_providers/AppContext";

export default async function Jobs() {
  //const { filters } = useContext(AppContext)

  return (
    <Fragment>
      <AppProvider>
        <JobsContainer />
      </AppProvider>
    </Fragment>
  )
}