export const languageMapper = (option: any) => {
  return { label: option.name, value: option.languageId };
};

export const artistMapper = (option: any) => {
  return { label: option.name, value: option.artistId };
};

export const musicStyleMapper = (option: any) => {
  return { label: option.name, value: option.musicStyleId };
};

export const countryMapper = (option: any) => {
  return { label: option.name, value: option.countryId };
};

export const yearsMapper = (option: any) => {
  return { label: option, value: option };
};

export const contributorRoleMapper = (option: any) => {
  return { label: option.name, value: option.contributorRoleId };
};

export const dspMapper = (option: any) => {
  return { label: option.name, value: option.distributorStoreId };
};

export const trackMapper = (option: any) => {
    return { label: option.name, value: option.id };
  };
