export enum ParticipantRole {
  OWNER = 'owner',
  ADMIN = 'admin',
  COLLABORATOR = 'collaborator',
  WORKPACKAGE = 'workpackage',
  GUEST = 'guest',
}

export const LabelByParticipantRole: Partial<Record<ParticipantRole, string>> =
  {
    [ParticipantRole.OWNER]: 'Propriétaire',
    [ParticipantRole.ADMIN]: 'Administrateur',
    [ParticipantRole.COLLABORATOR]: 'Collaborateur',
    [ParticipantRole.WORKPACKAGE]: 'Lot de travaux',
    [ParticipantRole.GUEST]: 'Invité',
  };
