import CreateVaults from "@/components/card/CreateVault";
import VaultsCard from "@/components/card/VaultsCard";
import { BsShieldLock } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const vaultsData = [
  { id: 1, title: "Life", goalsCount: 3, tasksCount: 6, tagsCount: 4, link: "/vault-view" },
  { id: 2, title: "Work", goalsCount: 5, tasksCount: 8, tagsCount: 2, link: "/vault-work" },
  { id: 3, title: "Projects", goalsCount: 2, tasksCount: 3, tagsCount: 1, link: "/vault-projects" },
  { id: 4, title: "Health", goalsCount: 4, tasksCount: 7, tagsCount: 3, link: "/vault-health" },
  { id: 5, title: "Personal", goalsCount: 6, tasksCount: 9, tagsCount: 5, link: "/vault-personal" },
];

const Vaults = () => {
  return (
    <div className="w-full p-4">
      {/* Header */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-2">
          <BsShieldLock className="w-[28px] h-[32px]" />
          <h1 className="text-[24px] font-medium text-[#393939]">Vaults</h1>
        </div>
      </div>

      {/* Description */}
      <div className="ml-10">
        <p className="text-sm text-gray-600 leading-relaxed">
          Life is a teasure
        </p>
      </div>

      {/* Vaults List */}
      <div className="flex flex-col gap-4 mt-6">
        {vaultsData.map((vault) => (
          <NavLink key={vault.id} to={vault.link} aria-label={`View ${vault.title} Vault`}>
            <VaultsCard
              title={vault.title}
              goalsCount={vault.goalsCount}
              tasksCount={vault.tasksCount}
              tagsCount={vault.tagsCount}
            />
          </NavLink>
        ))}

        <CreateVaults/>
      </div>
    </div>
  );
};

export default Vaults;