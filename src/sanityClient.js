import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "gplmukoc",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-12-09",
});

export const getCommunityLinks = async () => {
  const items = await sanityClient.fetch('*[_type == "communityLinks"]');
  return items;
};

export const getRoyalTwitchChannels = async () => {
  const items = await sanityClient.fetch('*[_type == "royalTwitchChannels"]');
  return items;
};

export const getAnnouncements = async () => {
  const items = await sanityClient.fetch('*[_type == "announcements"]');
  return items;
};

export const getEvents = async () => {
  const items = await sanityClient.fetch('*[_type == "events"]');
  return items;
};

export const getTournaments = async () => {
  const items = await sanityClient.fetch('*[_type == "tournaments"]');
  return items;
};

export const getPages = async () => {
  const items = await sanityClient.fetch('*[_type == "pages"]');
  return items;
};

export const getPageContents = async () => {
  const items = await sanityClient.fetch(
    '*[_type == "pageContents"]{..., forPage->}'
  );
  return items;
};
