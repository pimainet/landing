export type TrialProfile = {
  name: string;
  email: string;
  clientName: string;
  mapsUrl: string;
  createdAt: string;
};

const KEY = "lgos-trial";

export function saveTrial(input: Omit<TrialProfile, "createdAt">): TrialProfile {
  const profile: TrialProfile = {
    ...input,
    createdAt: new Date().toISOString(),
  };
  localStorage.setItem(KEY, JSON.stringify(profile));
  return profile;
}

export function getTrial(): TrialProfile | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as TrialProfile;
  } catch {
    return null;
  }
}
