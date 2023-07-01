import { RemirrorEditor } from "components/remirror";
import { Formik } from "formik";
import { useUpdateProductByIdMutation } from "redux";
import { TypographyTitleClasses } from "components/typography";
import { Button } from "components/button";
import { CheckIcon } from "assets";

interface ProductTitleDescriptionEditProps {
  name: string;
  description: string;
  id?: string;
}
export function ProductTitleDescriptionEdit(
  props: ProductTitleDescriptionEditProps
) {
  const { name, description, id } = props;

  const [mutate] = useUpdateProductByIdMutation();

  const handleSubmit = async (value: ProductTitleDescriptionEditProps) => {
    try {
      await mutate({ ...value, id: id! }).unwrap();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className={"py-5 px-2.5 md:px-5"}>
      <Formik initialValues={{ name, description }} onSubmit={handleSubmit}>
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <input
              className={`px-2.5 py-[5px] h-[34px] w-full border-dark-400 border rounded-[6px] ${TypographyTitleClasses}`}
              {...formik.getFieldProps("name")}
            />
            <RemirrorEditor
              defaultValue={formik.initialValues.description}
              onChange={(e) => {
                formik.setFieldValue("description", e);
              }}
            />
            <div className={"flex items-center w-full justify-end py-[15px]"}>
              <Button className={"!bg-white !text-dark-200"} type={"button"}>
                Cancel
              </Button>
              <Button className={"opacity-50"}>
                <img src={CheckIcon} alt={"check"} /> Save
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
