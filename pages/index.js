import { useState } from "react";
import {v4 as uuidv4} from 'uuid'; 
import {
  Bars3Icon,
  CogIcon,
  HomeIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import DashboardSidebarDesktop from "../components/dashboard/commons/DashboardSidebarDesktop";
import DashboardSidebarMobile from "../components/dashboard/commons/DashboardSidebarMobile";
import DirectoryList from "../components/dashboard/directory/DirectoryList";
import DirectoryMember from "../components/dashboard/directory/DirectoryMember";
import DashboardTitleMobile from "../components/dashboard/commons/DashboardTitleMobile";

const user = {
  name: "Tom Cook",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: false },
  { name: "Form", href: "/form", icon: HomeIcon, current: false },
];
const secondaryNavigation = [
  { name: "Apps", href: "#", icon: SquaresPlusIcon },
  { name: "Settings", href: "#", icon: CogIcon },
];
const tabs = [
  { name: "Profile", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Recognition", href: "#", current: false },
];

const profile = {
  name: "Ricardo Cooper",
  imageUrl:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  coverImageUrl:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
  fields: {
    phone: "(555) 123-4567",
    email: "ricardocooper@example.com",
    title: "Senior Front-End Developer",
    team: "Product Development",
    location: "San Francisco",
    sits: "Oasis, 4th floor",
    salary: "$145,000",
    birthday: "June 8, 1990",
  },
};


export const directory = [
  {
    id:uuidv4(),
    name: "Ricardo Cooper",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    coverImageUrl:
      "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
    fields: {
      Phone: "(555) 123-4567",
      Email: "ricardocooper@example.com",
      Title: "Senior Front-End Developer",
      Team: "Product Development",
      Location: "San Francisco",
      Sits: "Oasis, 4th floor",
      Salary: "$145,000",
      Birthday: "June 8, 1990",
    },
  },
];

const team = [
  {
    name: "Leslie Alexander",
    handle: "lesliealexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Foster",
    handle: "michaelfoster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dries Vincent",
    handle: "driesvincent",
    role: "Manager, Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    handle: "lindsaywalton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newDirectory, setNewDirectory] = useState(directory)
  const [newProfile, setNewProfile] = useState(profile)

  return (
    <>
      <div className="flex h-screen">
        <DashboardSidebarMobile
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          navigation={navigation}
          secondaryNavigation={secondaryNavigation}
          user={user}
        />

        <DashboardSidebarDesktop
          navigation={navigation}
          secondaryNavigation={secondaryNavigation}
          user={user}
        />

        <div className="flex  min-w-0 flex-1 flex-col overflow-hidden">
          <DashboardTitleMobile setSidebarOpen={setSidebarOpen} />
          <div className="relative z-0 flex flex-1 overflow-hidden">
            

            <DirectoryMember newProfile={newProfile} setNewProfile={setNewProfile} newDirectory={newDirectory} uuidv4={uuidv4()} setNewDirectory={setNewDirectory}  profile={profile} tabs={tabs} team={team} />

            <DirectoryList newProfile={newProfile} setNewProfile={setNewProfile} uuidv4={uuidv4()} newDirectory={newDirectory}setNewDirectory={setNewDirectory} />
          
          </div>
        </div>
      </div>
    </>
  );
}
