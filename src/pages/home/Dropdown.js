import { React, Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { GetAllCategories } from "../../apiHits/productCategoryApi/GetAllCategories";
import { Link } from "react-scroll";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ({ setSelecter }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let dataList = await GetAllCategories();
      setData(dataList);
    }
    fetchData();
  }, []);
  return (
    <div>
      <Menu as="div" className="relative    justify-center ">
        <div>
          <Menu.Button className="inline-flex  w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Categories
            <ChevronDownIcon
              className="mr-6 h-9  w-28 text-gray-400"
              //   aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-10 z-10 pr-16 mt-2   origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {data?.map((item, index) => (
              <div key={index}>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        to=""
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        <Link to={item} onClick={() => setSelecter(item)}>
                          <span>{item}</span>
                        </Link>
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
