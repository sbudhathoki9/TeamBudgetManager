import { SelectedPage } from '@/shared/types';
import React from 'react'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Players = ({setSelectedPage}: Props) => {
  return (
    <section
      id="players" className="w-full bg-primary-100 py-40" 
    >
    <p className="my-5">
             Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
             egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
             fames vitae vitae quis. Quis amet vulputate tincidunt at in
             nulla nec. Consequat sed facilisis dui sit egestas ultrices
             tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
             Felis orci diam odio.
           </p>
           <p className="mb-5">
             Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
             tellus quam porttitor. Mauris velit euismod elementum arcu neque
             facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
             enim mattis odio in risus nunc.
           </p>
 </section>
  )
}

export default Players;