import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { directory } from "../../../pages/index";
import useForm from "../../../hooks/useForm";

export default function DirectoryMemberModal({ newDirectory, setNewDirectory, open, setOpen, uuidv4 }) {
  const cancelButtonRef = useRef(null);
  const { formState, onInputChange } = useForm({
    id: '',
    name: "",
    imageUrl: "",
    coverImageUrl: "",
    about: "",
    phone: "",
    email: "",
    title: "",
    team: "",
    location: "",
    sits: "",
    salary: "",
    birthday: "",
  });

  const {
    name,imageUrl,coverImageUrl,about,phone,email,title,team,location,sits,salary,birthday} = formState;

  const nuevoMiembro = {
    id: uuidv4,
    name,
    imageUrl,
    coverImageUrl,
    about,
    fields: {
      phone,
      email,
      title,
      team,
      location,
      sits,
      salary,
      birthday,
    },
  };

  function addMember() {
    setNewDirectory([...newDirectory, nuevoMiembro]);
    
    setOpen(false);
  }

  console.log(newDirectory);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <form className="space-y-8 divide-y divide-gray-200">
                  <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
                      <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Personal Information
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          Use a permanent address where you can receive mail.
                        </p>
                      </div>
                      <div className="space-y-6 sm:space-y-5">
                        <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                          <label
                            htmlFor="name"
                            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Ingresa tu nombre completo"
                            id="full-name"
                            autoComplete="given-name"
                            onChange={onInputChange}
                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                          />
                        </div>
                        <hr />
                        <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                          <label
                            htmlFor="name"
                            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                          >
                            Phone
                          </label>
                          <input
                            type="number"
                            name="phone"
                            value={phone}
                            placeholder="Ingresa tu telefono"
                            id="phone"
                            onChange={onInputChange}
                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                          />
                        </div>
                        <hr />
                        <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                          <label
                            htmlFor="name"
                            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Ingresa tu email"
                            type="email"
                            onChange={onInputChange}
                            autoComplete="email"
                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                          />
                        </div>
                        <hr />
                        <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                          <label
                            htmlFor="name"
                            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            name="location"
                            value={location}
                            placeholder="Ingresa Direccion"
                            id="location"
                            onChange={onInputChange}
                            autoComplete="location"
                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                          />
                        </div>
                        <hr />
                        <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                          <label
                            htmlFor="name"
                            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            name="sits"
                            id="sits"
                            placeholder="Ingresa tu direccion"
                            value={sits}
                            autoComplete="street-address"
                            onChange={onInputChange}
                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                          />
                        </div>
                        <hr />
                        <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                          <label
                            htmlFor="name"
                            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                          >
                            Title
                          </label>
                          <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Ingresa tu profesion"
                            value={title}
                            autoComplete="street-address"
                            onChange={onInputChange}
                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                          />
                        </div>
                        <hr />
                        <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                          <label
                            htmlFor="name"
                            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                          >
                            Team
                          </label>
                          <input
                            type="text"
                            name="team"
                            id="team"
                            placeholder="Ingresa tu Area de trabajo"
                            value={team}
                            autoComplete="team"
                            onChange={onInputChange}
                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                          />
                        </div>
                        <hr />
                        <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                          <label
                            htmlFor="salary"
                            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                          >
                            Salary
                          </label>
                          <input
                            type="text"
                            name="salary"
                            value={salary}
                            placeholder="ingresa tu salario"
                            id="salary"
                            autoComplete="address-level2"
                            onChange={onInputChange}
                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                          />
                        </div>
                        <hr />
                        <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                          <label
                            htmlFor="birthday"
                            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                          >
                            Birthday
                          </label>
                          <input
                            type="date"
                            name="birthday"
                            value={birthday}
                            id="birthday"
                            autoComplete="address-level1"
                            onChange={onInputChange}
                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                          />
                        </div>
                        <hr />
                        <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                          <label
                            htmlFor="birthday"
                            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                          >
                            About you
                          </label>
                          <textarea
                            id="about"
                            name="about"
                            value={about}
                            onChange={onInputChange}
                            rows={3}
                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Describe algunas palabras sobre ti.
                        </p>

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                          <label
                            htmlFor="cover-photo"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            Imagen de Perfil
                          </label>
                          <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                              <div className="space-y-1 text-center">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                  <label
                                    htmlFor="imageUrl"
                                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                  >
                                    <span>Subir una imagen</span>
                                    <input
                                      value={imageUrl}
                                      id="imageUrl"
                                      name="imageUrl"
                                      onChange={onInputChange}
                                      type="file"
                                      className="sr-only"
                                    />
                                  </label>
                                  <p className="pl-1">o arrastra aqui</p>
                                </div>
                                <p className="text-xs text-gray-500">
                                  PNG, JPG, GIF up to 10MB
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                          <label
                            htmlFor="cover-photo"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            Imagen de portada
                          </label>
                          <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                              <div className="space-y-1 text-center">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                  <label
                                    htmlFor="coverImageUrl"
                                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                  >
                                    <span>Subir una imagen</span>
                                    <input
                                      value={coverImageUrl}
                                      id="coverImageUrl"
                                      name="coverImageUrl"
                                      onChange={onInputChange}
                                      type="file"
                                      className="sr-only"
                                    />
                                  </label>
                                  <p className="pl-1">o arrastra aqui</p>
                                </div>
                                <p className="text-xs text-gray-500">
                                  PNG, JPG, GIF up to 10MB
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                            onClick={() => addMember()}
                          >
                            Add Member
                          </button>
                          <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
