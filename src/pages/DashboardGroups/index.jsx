import { useContext, useState } from "react";
import { GroupsContext } from "../../providers/Groups";
import AddButton from "../../components/AddButton";
import Button from "../../components/Button";
import PageButton from "../../components/PageButton";
import { ContainerMain, HeaderGroups, DisplayGroups, Pages } from "./styles";
import Header from "../../components/Header";
import GroupsList from "../../components/GroupsList";
import Group from "../../components/Group";
import GroupSignup from "../../components/GroupSignup";
import Modal from "../../components/Modal";
const DashboardGroups = () => {
  const [open, setOpen] = useState(false);
  const {
    Subscriptions,
    setFilter,
    handleClick,
    previousPage,
    nextPage,
    page,
  } = useContext(GroupsContext);
  return (
    <>
      <Header />
      <ContainerMain>
        <section style={{ overflow: "auto" }}>
          <HeaderGroups>
            <div>
              <h3>Grupos</h3>
              <AddButton
                onClick={() => {
                  setOpen(true);
                }}
              />
              <Button onClick={Subscriptions} variant="contained" thin>
                Meus grupos
              </Button>
            </div>
            <div>
              <input
                placeholder="Pesquisar"
                onChange={(e) => setFilter(e.target.value)}
              />
              <button onClick={handleClick}>Pesquisar</button>
            </div>
          </HeaderGroups>
          <GroupsList />
          <Pages>
            <PageButton left onClick={previousPage} />
            <p>{page}</p>
            <PageButton right onClick={nextPage} />
          </Pages>
        </section>
        <DisplayGroups>
          <Group />
        </DisplayGroups>
      </ContainerMain>
      <Modal open={open} setOpen={setOpen}>
        <GroupSignup setOpes={setOpen} />
      </Modal>
    </>
  );
};

export default DashboardGroups;
