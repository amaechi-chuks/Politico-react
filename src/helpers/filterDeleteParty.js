const filterDeleteParty = (editPartyList, partyId) => {
  const deleteRequest = editPartyList.filter(
    request => request.party.id !== partyId
  );
  return deleteRequest;
};

export default filterDeleteParty;
