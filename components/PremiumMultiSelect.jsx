import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaTimes, FaChevronDown } from "react-icons/fa";

function PremiumMultiSelect({ services, selected, setSelected }) {

  const toggleService = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((s) => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="w-full">
      {/* TAG DISPLAY */}
      <div className="flex flex-wrap gap-2 bg-[#0f141b] p-3 rounded-xl border border-yellow-500">
        {selected.length === 0 && (
          <span className="text-gray-400 text-sm">Select services</span>
        )}

        {selected.map((id) => {
          const service = services.find((s) => s.id === id);
          return (
            <span
              key={id}
              className="flex items-center gap-2 bg-yellow-500 text-black px-3 py-1 rounded-lg text-sm font-semibold"
            >
              {service?.name}
              <FaTimes
                className="cursor-pointer"
                onClick={() => toggleService(id)}
              />
            </span>
          );
        })}

        <Listbox value={selected} onChange={setSelected} multiple>
          <div className="relative ml-auto">
            <Listbox.Button className="flex items-center gap-2 text-yellow-500 font-semibold">
              <FaChevronDown />
            </Listbox.Button>

            {/* DROPDOWN */}
            <Transition
              as={Fragment}
              enter="transition duration-100"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition duration-75"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Listbox.Options className="absolute mt-2 w-60 bg-[#1a1f27] text-white rounded-xl shadow-xl p-2 z-20">
                {services.map((service) => (
                  <Listbox.Option
                    key={service.id}
                    value={service.id}
                    as={Fragment}
                  >
                    <div
                      onClick={() => toggleService(service.id)}
                      className="cursor-pointer flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-500 hover:text-black transition"
                    >
                      <input
                        type="checkbox"
                        checked={selected.includes(service.id)}
                        readOnly
                        className="form-checkbox"
                      />
                      <span>{service.name}</span>
                    </div>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
}

export default PremiumMultiSelect;
