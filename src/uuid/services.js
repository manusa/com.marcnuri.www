import gatsbyConfig from '../../gatsby-config';

export const MAX_QUANTITY = 20000;
export const MIN_QUANTITY = 1;

export const fetchUuids = async (quantity = 1) => {
  const url = new URL(`${gatsbyConfig.siteMetadata.siteUrl}${gatsbyConfig.siteMetadata.api.uuid}`);
  url.search = new URLSearchParams({quantity}).toString();
  return await fetch(url, {
    headers: {Accept: 'application/json'}
  });
};

export function toJson(response) {
  if (!response.ok) {
    throw Error(`${response.status}`);
  }
  return response.json();
}

export const processUuids = (uuids = []) =>
  ({
    upperCase = false,
    braces = false,
    hyphens = true,
    separator = '\n'
  }) =>
    uuids.map(uuid => {
      let processedUuid = uuid;
      if (upperCase) {
        processedUuid = processedUuid.toUpperCase();
      }
      if (braces) {
        processedUuid = `{${processedUuid}}`;
      }
      if (!hyphens) {
        processedUuid = processedUuid.replace(/-/g, '');
      }
      return processedUuid;
    }).join(separator);
